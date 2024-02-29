import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../components/shared/Sidebar';
import '@testing-library/jest-dom'; 

describe('Sidebar Component', () => {
  test('should render Sidebar with correct links and toggle functionality', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    // Check if sidebar is initially open
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('hidden');

    // Check if sidebar button toggles the sidebar
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('hidden');

    // Check if sidebar links are rendered
    const sidebarLinks = screen.getAllByRole('link');
    expect(sidebarLinks.length).toBeGreaterThan(0);

    // Check if clicking a sidebar link navigates to the correct route
    const firstSidebarLink = sidebarLinks[0];
    fireEvent.click(firstSidebarLink);
    expect(window.location.pathname).toBe('/');
    
  });
});
