import head from "./head.js";
import header from "./header.js";
import footer from "./footer.js";
import deployButton from "./deploy-button.js";

export default function layout(data) {
  return `
<!DOCTYPE html>
<html lang="en">
  ${head({
    title: data.title,
    metaDescription: data.metaDescription,
    url: data.url,
    openGraphImageName: data.openGraphImageName,
  })}
  <body>
  ${header({ title: data.title })}
  <main class="main">
    <section>  
    ${data.content}
    </section>

    <hr />
    
    <section>
      <h2>What are Edge Functions?</h2>
      <p>Using Javascript and Typescript, Netlify Edge Functions give you the power to modify network requests to localize content, serve relevant ads, authenticate visitors, A/B test content, and much more! And this all happens at the <strong>Edge</strong> — directly from the worldwide location closest to each user.</p>

      <p>To use Edge Functions on Netlify, add JavaScript or Typescript files to an edge-functions directory in your project, and add <code>[[edge_functions]]</code> entries to your netlify.toml file. <a href="https://docs.netlify.com/edge-functions/configure-and-build/" target="_blank">Learn more on the docs</a>.</p>

      ${data.url.pathname !== "/" ? `<a href="/">Explore more examples</a>` : ""}
    </section>

    <hr />

    <section>
      <h3>Deploy this site to Netlify</h3>
      <p>Try out Edge Functions on Netlify today! Click the button below to deploy this site to your Netlify account.</p>
      ${deployButton()}
    </section>

  </main>
  ${footer()}
  </body>
</html>
`;
}
