import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        // categories.push(newCategory);
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}
