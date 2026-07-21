// ====== Pepperwahl Landing Page Tracking ======
// Sends events to main Pepperwahl backend for admin dashboard

(function () {
  var API = "https://hostslice.onrender.com/api/tracking";
  var LOCAL_API = "http://localhost:5000/api/tracking";

  var sid = sessionStorage.getItem("pw_sid");
  if (!sid) {
    sid = "sess_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem("pw_sid", sid);
  }

  function send(endpoint, data) {
    data.session_id = sid;
    data.user_id = "landing_visitor";
    data.user_email = "landing@pepperwahl.com";
    data.user_name = "Landing Page Visitor";

    var payload = JSON.stringify(data);
    var headers = { "Content-Type": "application/json" };

    // Send to production
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        API + "/" + endpoint,
        new Blob([payload], { type: "application/json" })
      );
    } else {
      fetch(API + "/" + endpoint, {
        method: "POST",
        headers: headers,
        body: payload,
        keepalive: true,
      }).catch(function () {});
    }

    // Also send to local for testing
    fetch(LOCAL_API + "/" + endpoint, {
      method: "POST",
      headers: headers,
      body: payload,
      keepalive: true,
    }).catch(function () {});
  }

  // 1. Page visit
  send("page-visit", {
    page: location.pathname + location.search,
    page_title: document.title,
    referrer: document.referrer,
  });

  // 2. Session start (once per session)
  if (!sessionStorage.getItem("pw_started")) {
    sessionStorage.setItem("pw_started", "1");
    send("session-start", {});
  }

  // 3. All button & link clicks
  document.addEventListener(
    "click",
    function (e) {
      var el = e.target.closest(
        "button, a, [role='button'], input[type='submit']"
      );
      if (!el) return;

      var text = (el.textContent || el.value || "").trim().substring(0, 80);
      var href = el.getAttribute("href") || "";
      if (!text && !href) return;

      send("button-click", {
        button_id:
          el.id ||
          el.className.split(" ")[0] ||
          el.tagName.toLowerCase() + ":" + text.substring(0, 30),
        button_text: text || href,
        page: location.pathname,
        section:
          "landing:" +
          (el.closest("nav")
            ? "nav"
            : el.closest("header")
            ? "header"
            : el.closest("footer")
            ? "footer"
            : el.closest("form")
            ? "form"
            : "body"),
      });
    },
    true
  );

  // 4. Contact form submissions (with dedup)
  var lastFormSubmit = "";
  document.addEventListener(
    "submit",
    function (e) {
      var form = e.target;
      var fields = {};
      form.querySelectorAll("input, textarea, select").forEach(function (inp) {
        if (inp.name && inp.type !== "password") fields[inp.name] = inp.value;
      });

      var payload = JSON.stringify(fields);

      // Skip if same form data was just submitted (within 5 seconds)
      if (payload === lastFormSubmit) return;
      lastFormSubmit = payload;
      setTimeout(function () {
        lastFormSubmit = "";
      }, 5000);

      send("button-click", {
        button_id: "contact_form_submit",
        button_text:
          "Contact Form Submitted | " + payload.substring(0, 300),
        page: location.pathname,
        section: "landing:contact_form",
      });
    },
    true
  );

  // 5. Append session ID to all links going to the main app for user linking
  document.addEventListener("click", function(e) {
    var link = e.target.closest("a");
    if (!link) return;
    var href = link.getAttribute("href") || "";
    if (href.includes("survey.pepperwahl.com") || href.includes("localhost:5173")) {
      if (!href.includes("ref_session")) {
        var separator = href.includes("?") ? "&" : "?";
        link.setAttribute("href", href + separator + "ref_session=" + sid);
      }
    }
  }, false);
})();
