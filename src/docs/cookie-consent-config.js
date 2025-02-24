document.addEventListener('DOMContentLoaded', () => {
  const config = {
    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {},
      foo: {},
    },
    consentBanner: {
      title: 'Cookies on the NSW Design System website',
      description:
        "We've added essential and additional cookies to ensure this service works effectively, track how it's being used, and make necessary improvements. You can <a href='#'>manage your cookie settings</a> by visiting the 'Cookies' page, found at the bottom of this page.",
      acceptAllBtn: 'Accept all',
      acceptNecessaryBtn: 'Reject all',
      showPreferencesBtn: 'Manage your preferences',
      confirmationMessage: `Thanks for making your selection. View and update your <a href="#cookie-consent" class="js-open-dialog-cookie-consent-preferences" aria-haspopup="dialog">cookie preferences</a>.`,
    },
    preferencesDialog: {
      title: 'Manage cookie preferences',
      acceptAllBtn: 'Accept all',
      acceptNecessaryBtn: 'Reject all',
      savePreferencesBtn: 'Accept current selection',
      closeIconLabel: 'Close dialog',
      sections: [
        {
          title: 'Necessary',
          description:
            'This site requires necessary cookies for privacy protection, accessibility, and secure access to government services. They cannot be turned off.',
          linkedCategory: 'necessary',
        },
        {
          title: 'Performance and Analytics',
          description:
            'These cookies collect information about how you use our website. All of the data is anonymised and cannot be used to identify you.',
          linkedCategory: 'analytics',
        },
        {
          title: 'Foo',
          description:
            'This is a test cookie script that triggers a browser alert to confirm the cookie function is working.',
          linkedCategory: 'foo',
        },
      ],
      tab1: {
        tabTitle: 'Cookie preferences',
      },
      tab2: {
        tabTitle: 'How we use cookies',
        content: `
          <p>We use cookies to enhance your experience when using our website.</p>
          <p>Cookies help us understand how you interact with our site, allowing us to improve functionality and ensure security.</p>
          <p>They do not contain viruses or harmful software and take up minimal space on your device.</p>

          <h2>How we use cookies</h2>
          <p>Our website uses cookies to:</p>
          <ul>
            <li>ensure essential site functionality, such as security and accessibility</li>
            <li>remember your preferences, including dismissed notifications and pop-ups</li>
            <li>analyse website traffic and user interactions to improve content and navigation</li>
            <li>enable sharing of content on social media platforms like LinkedIn</li>
            <li>help us make continuous improvements based on user behaviour</li>
          </ul>
          <p>Some cookies may collect information that is classified as personal data. Please refer to our <a href="[your privacy policy URL]">Privacy Policy</a> to learn more about how we handle personal information.</p>
          <p>For more details on cookies, how they work, and how to manage or delete them, visit <a href="https://www.allaboutcookies.org">www.allaboutcookies.org</a>.</p>
        `, 
      },
    },
  };

  new window.NSW.CookieConsent(config);
});