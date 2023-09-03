import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesRecipes } from '../../redux/recipesSlice';
import Post from '../Post/Post';
import Loader from '../reusableComponents/Loader';

const CategoriesItems = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes.categoriesRecipes);
    const pageRecipes = recipes[id] || [];
    const isPending = useSelector((store) => store.recipes.isPending);

    useEffect(() => {
        try {
            if (pageRecipes.length === 0) {
                dispatch(fetchCategoriesRecipes(id));
            }
        } catch (error) {
            console.error(error);
        }
    }, [id, dispatch, pageRecipes.length]);

    return (
        <>
            {isPending && <Loader />}

            {pageRecipes.map((elem, index) => (
                <Post key={index} props={elem} />
            ))}
        </>
    );
};
export default CategoriesItems;