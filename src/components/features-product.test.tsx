import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FeaturesProduct from '@/components/features-product'

const mockProducts = [
  {
    id: 1,
    name: 'Test Product 1',
    price: 100,
    picture: 'test1.jpg',
  },
  {
    id: 2,
    name: 'Test Product 2',
    price: 200,
    picture: 'test2.jpg',
  },
]

describe('FeaturesProduct Component', () => {
  it('should render the correct title', () => {
    render(<FeaturesProduct products={mockProducts} />)
    expect(screen.getByText('สินค้าทั้งหมด')).toBeInTheDocument()
  })

  it('should render the correct number of products', () => {
    render(<FeaturesProduct products={mockProducts} />)
    const productNames = screen.getAllByText(/Name:/)
    expect(productNames).toHaveLength(mockProducts.length)
  })

  it('should display product names correctly', () => {
    render(<FeaturesProduct products={mockProducts} />)
    expect(screen.getByText(/Name: Test Product 1/)).toBeInTheDocument()
    expect(screen.getByText(/Name: Test Product 2/)).toBeInTheDocument()
  })
})
