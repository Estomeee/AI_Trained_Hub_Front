import { FC } from "react";
import { ThemeProvider } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import AppTheme from "./AppTheme";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import IndexPage from "./pages/Index/IndexPage";
import Name from "./pages/Name/Page";

export interface Page extends FC {}

export const Router: FC = () => {
  const renderPage = (Page: Page) => (
    <ThemeProvider theme={AppTheme}>
      <MainLayout>
        {/* <Toast />
        <ErrorToast /> */}
        <Page />
      </MainLayout>
    </ThemeProvider>
  );

  return (
    <Routes>
      <Route index element={renderPage(IndexPage)} />
      <Route path="/Name" element={renderPage(Name)} />

      {/* <Route path="*" element={renderPage(Error404Page)} /> */}
    </Routes>
  );
};
