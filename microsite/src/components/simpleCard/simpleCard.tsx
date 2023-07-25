import React from 'react';

export interface ICardData {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
  children?: React.ReactNode;
}

export const SimpleCard = ({ header, body, footer, children }: ICardData) => (
  <div className="card">
    <div className="card__header">{header}</div>

    <div className="card__body">{body}</div>

    <div className="card__footer">{footer}</div>
    {children}
  </div>
);