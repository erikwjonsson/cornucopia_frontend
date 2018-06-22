export const getApiUrl = () => {
  const browser_url = window.location.href;
  if (browser_url.includes("localhost:3000")) {
    return "http://localhost:3001";
  } else if (
    browser_url.browser_url.includes("cornucopia-frontend.herokuapp.com")
  ) {
    return "https://cornucopia-backend.herokuapp.com";
  }
};

export default getApiUrl;
