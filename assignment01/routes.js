const requestListener = (req, res) => {
  const url = req.url;
  //   console.log(url);
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(
      '<head><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">User 1</button></form></head>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><ul><li>User 1</li></ul></head>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    // console.log(req.user);
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const userInfo = parsedBody.split("=")[1];
      console.log(userInfo);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
};

module.exports = requestListener;
