import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("plh_facilitator_my");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive = {
  sheets_folder_ids: ["1k8zJfBeOm18gYDsk0XmdUm7OFtZDUY9R", "1bFeLrhGRb0jjCMa77tTRQcGYkgH0CYeC"],
  assets_folder_ids: ["1KcHDI7O4o2_FZ_YlXsz-8OqN3ehsfdVf", "16eHPz7W9-AHURP-rILGDtENKmkTKwqdc"],
};

config.android = {
  app_id: "international.idems.plh_facilitator_my",
  app_name: "FaciNK",
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.ios.app_id = "international.idems.plh-facilitator-my";
config.ios.app_name = "FaciNK";

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-my-content.git",
  content_tag_latest: "1.1.81",
};

config.web.favicon_asset = "images/logos/favicon.png";
config.api.db_name = "plh_facilitator_my"

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "FaciNK";
config.app_config.APP_HEADER_DEFAULTS.title = "FaciNK";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from FaciNK";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from FaciNK";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
config.error_logging = { dsn: "https://12f94f1dda484e23bd027cb6dd518451@app.glitchtip.com/4993"};

export default config;
