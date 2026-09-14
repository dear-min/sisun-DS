import { ProductCard } from '../../molecules/ProductCard/ProductCard';
import type { ProductCardProps } from '../../molecules/ProductCard/ProductCard';
import './product-grid.css';

export interface ProductGridProps {
  /** 상품 목록 */
  products: ProductCardProps[];
  /** 그리드 열 개수 (기본 4열) */
  columns?: 2 | 3 | 4;
  /** 그리드 상단 카테고리 타이틀 */
  title?: string;
  /** 전체 아이템 수 표기 */
  totalCount?: number;
  /** 로딩 스켈레톤 노출 여부 */
  isLoading?: boolean;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  columns = 4,
  title,
  totalCount,
  isLoading = false,
  className = '',
}) => {
  return (
    <section className={`fashion-product-grid-section ${className}`}>
      {(title || typeof totalCount === 'number') && (
        <div className="fashion-product-grid__header">
          {title && <h2 className="fashion-product-grid__title font-editorial">{title}</h2>}
          {typeof totalCount === 'number' && (
            <span className="fashion-product-grid__count tabular-nums">
              {totalCount} ITEMS
            </span>
          )}
        </div>
      )}

      <div className={`fashion-product-grid fashion-product-grid--cols-${columns}`}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="fashion-product-skeleton">
                <div className="fashion-product-skeleton__media" />
                <div className="fashion-product-skeleton__line fashion-product-skeleton__line--short" />
                <div className="fashion-product-skeleton__line" />
                <div className="fashion-product-skeleton__line fashion-product-skeleton__line--medium" />
              </div>
            ))
          : products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
      </div>
    </section>
  );
};
