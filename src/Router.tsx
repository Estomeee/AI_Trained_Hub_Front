import { FC } from "react";
import { ThemeProvider } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import AppTheme from "./AppTheme";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import Main from "./pages/Main/Main";
import Error404Page from "./pages/Error404Page/Error404Page";

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
      <Route index element={renderPage(Main)} />
      <Route path="*" element={renderPage(Error404Page)} />
    </Routes>
  );
};
