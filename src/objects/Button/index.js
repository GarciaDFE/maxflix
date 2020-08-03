import React from "react"
import styled from "styled-components"

const ButtonLink = styled.button`
   position: fixed;
   width: 100%;
   left: 0;
   right: 0;
   bottom: 0;
   background: var(--primary);
   border-radius: 0;
   border: 0;
   text-align: center;
   color: var(--white);
   cursor: pointer;
   padding: 16px 24px;
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   outline: none;
   text-decoration: none;
   transition: opacity .3s;
   margin: 0;
   @media (min-width: 800px) {
      position: relative;
      width: auto;
      display: inline-block;
      background-color: transparent;
      border: 1px solid var(--white);
      box-sizing: border-box;
      border-radius: 5px;
      &:hover,
      &:focus {
         opacity: .5;
      }
   }

`

const Button = ({ className="button-link", 
                  children, 
                  target }) => {
   return (
      <ButtonLink className={className} href={target}>
         {children}
      </ButtonLink>
   )
}

export default Button