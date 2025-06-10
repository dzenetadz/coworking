let Utils = {
  datatable: function (table_id, columns, data, pageLength = 15) {
    if ($.fn.dataTable.isDataTable("#" + table_id)) {
      $("#" + table_id)
        .DataTable()
        .destroy();
    }
    $("#" + table_id).DataTable({
      data: data,
      columns: columns,
      pageLength: pageLength,
      lengthMenu: [2, 5, 10, 15, 25, 50, 100, "All"],
    });
  },
  parseJwt: function (token) {
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload);
      return JSON.parse(decoded);
    } catch (e) {
      console.error("Invalid JWT token", e);
      return null;
    }
  },
  getJwtPayload() {
    const token = localStorage.getItem("user_token");
    if (!token) return null;

    // A JWT is three Base64URL-encoded parts separated by dots
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    try {
      // Base64URL → Base64
      const base64 = parts[1]
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        // pad out to multiple of 4 chars
        .padEnd(parts[1].length + (4 - (parts[1].length % 4)) % 4, "=");

      // atob → binary string; decodeURIComponent→unicode
      const json = decodeURIComponent(
        atob(base64)
          .split("")
          .map(c => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
          .join("")
      );

      return JSON.parse(json);
    } catch (e) {
      console.warn("Invalid JWT payload:", e);
      localStorage.removeItem("user_token");
      return null;
    }
  }
}
