// We cannot server-side render these routes as they're dynamically built from our Flask app.
// TODO: can this be improved? E.g. prerender known feeds at build time, then provide resources to prerender the rest? Not sure.
export const prerender = false;
