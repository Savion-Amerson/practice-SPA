import * as views from "./views";

export default st => `
${views[st.view](st)}
`;

// export default st => `
//   ${views["st.view"](sy)}
//   ${views["Bio"]()}
//   ${views["Gallery"]()}
//   ${views["Register"]()}
// `;

// import html from "html-literal";

// export default () => html`
//   <section id="jumbotron">
//     <h2>Savvy Coders Jan. 2020 Cohort</h2>
//     <a href="">"Call to Action" "Button"</a>
//   </section>
// `;
