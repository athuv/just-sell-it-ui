import React, { Dispatch, SetStateAction } from 'react';

const CategoryContent = ({
  setIsSearchModalOpen,
  setIsSelected,
  setSelectedCategory,
}: {
  setIsSearchModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsSelected: Dispatch<SetStateAction<string>>;
  setSelectedCategory: Dispatch<SetStateAction<string[]>>;
}) => {
  const handleLiClick = (
    event: React.MouseEvent<HTMLLIElement>,
    id: string,
    value: string,
  ) => {
    event.preventDefault();
    setSelectedCategory([id, value]);
    setIsSearchModalOpen(false);
  };

  return (
    <>
      <li></li>
      <li onClick={(event) => handleLiClick(event, '5', 'SELECTED CAT')}>
        Category
      </li>
    </>
  );
};

export default CategoryContent;
