export const onOpen = () => {
  const menu = DocumentApp.getUi()
    .createMenu("My Sample React Project") // edit me!
    .addItem("Launch Sidebar", "openSidebar");

  menu.addToUi();
};

export const openSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile("sidebar-page");
  DocumentApp.getUi().showSidebar(html);
};
