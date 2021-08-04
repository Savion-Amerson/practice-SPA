import html from "html-literal";

export default () => html`
  <form id="register" method="POST" action="">
    <div>
      <label for="username">Username:</label>
      <input type="text" name="url" id="url" placeholder="Enter Photo URL" />
    </div>
    <div>
      <label for="title">Photo Title/Description</label>
      <input type="text" name="title" id="title" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your@email.here"
      />
    </div>
    <input type="submit" name="submit" value="Submit Photo" />
  </form>
`;
