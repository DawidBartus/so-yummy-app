import { Route, Routes } from 'react-router';
import './App.css';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from './Theme';
import NotFound from './components/NotFound/NotFound';
import RegisterForm from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import DevComponents from './pages/DevComponents';
import NavigationPage from './pages/NavigationPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoriesItems from './components/Categories/CategoriesItems';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PostDetails from './components/Post/PostDetails';
import ShoppingListPage from './pages/ShoppingListPage';
import FavoritesPage from './pages/FavoritesPage';
import WelcomePage from './pages/Welcome';

function App() {
    const isDarkMode = useSelector((state) => state.pageMode.pageMode);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/signUp" element={<RegisterForm />} />
                <Route path="/signIn" element={<LogInPage />} />

                <Route path="/home" element={<NavigationPage />}>
                    <Route path="/home" element={<HomePage />} />

                    <Route
                        path="/home/categories/"
                        element={<CategoriesPage />}
                    >
                        <Route element={<CategoriesItems />} />
                        <Route
                            path="/home/categories/:id"
                            element={<CategoriesItems />}
                        />
                    </Route>

                    <Route path="/home/search" element={<SearchPage />} />

                    <Route
                        path="/home/shoppingList"
                        element={<ShoppingListPage />}
                    />

                    <Route path="/home/Dev" element={<DevComponents />} />

                    <Route path="/home/:link" element={<PostDetails />} />
                    <Route path="/home/favorites" element={<FavoritesPage />} />

                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
