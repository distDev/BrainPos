import React, { FC, useContext, useState } from 'react';
import { Context } from '../../../Context/Context';
import { IUser } from '../../../interfaces';
import { IContx } from '../../forms/authForm/AuthForm';
import BasicModal from '../../modals/Modals';

import './header.scss';




export const Header = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useContext<IContx>(Context);

 
  return (
    <>
      <header className='header'>
        <a href='#'>BrainPost</a>
        <BasicModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
        {user ? (
          <div className='header-avatar'>
            <h4>{user.username}</h4>
            <img
              src={user.profilePic}
              alt='изображение'
            />
          </div>
        ) : (
          <button onClick={handleOpen}>Войти</button>
        )}
      </header>
    </>
  );
};
