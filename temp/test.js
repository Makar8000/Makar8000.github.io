(function() {
  const data = {
    access_token: JSON.parse(localStorage.auth_token).access_token,
    secret: app.client_secret,
  };
  const b = `------WebKitFormBoundaryQkVcDyQnTFEan4bd\r\nContent-Disposition: form-data; name=\"access_token\"\r\n\r\n%TOKEN_GOES_HERE%\r\n------WebKitFormBoundaryQkVcDyQnTFEan4bd\r\nContent-Disposition: form-data; name=\"secret\"\r\n\r\n%SECRET_GOES_HERE%\r\n------WebKitFormBoundaryQkVcDyQnTFEan4bd--\r\n`.replace(`%TOKEN_GOES_HERE%`, data.access_token).replace(`%SECRET_GOES_HERE%`, data.secret);
  fetch("https://ff14.toolboxgaming.space/api/discord/getUser", {
    headers: {
      'content-type': "multipart/form-data; boundary=----WebKitFormBoundaryQkVcDyQnTFEan4bd",
    },
    body: b,
    method: `POST`,
  }).then(o => o.json()).then(o => {
    data.userid = o.data.id;
    const b2 = `------WebKitFormBoundarydQ0IwsOOVI7xR621\r\nContent-Disposition: form-data; name=\"secret\"\r\n\r\n%SECRET_GOES_HERE%\r\n------WebKitFormBoundarydQ0IwsOOVI7xR621\r\nContent-Disposition: form-data; name=\"userid\"\r\n\r\n%ID_GOES_HERE%\r\n------WebKitFormBoundarydQ0IwsOOVI7xR621\r\nContent-Disposition: form-data; name=\"archived\"\r\n\r\nN\r\n------WebKitFormBoundarydQ0IwsOOVI7xR621--\r\n`.replace(`%ID_GOES_HERE%`, data.userid).replace(`%SECRET_GOES_HERE%`, data.secret);
    fetch("https://ff14.toolboxgaming.space/api/TBSPStrat/getNoExclude", {
      headers: {
        'content-type': "multipart/form-data; boundary=----WebKitFormBoundarydQ0IwsOOVI7xR621",
      },
      body: b2,
      method: `POST`,
    }).then(p => p.json()).then(p => {
      p.data.forEach(s => {
        const ps = localStorage[s.uniqueId];
        console.log(`ps` + ps);
      });
    });;
  });
})();
