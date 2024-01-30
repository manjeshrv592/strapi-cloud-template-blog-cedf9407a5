const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Aquatik Angels",

      "app.components.LeftMenu.navbrand.workplace": "Admin Panel",

      "Auth.form.welcome.title": "Welcom to Aquatik Angels",

      "Auth.form.welcome.subtitle": "Login to Admin Panel",
    },

    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
