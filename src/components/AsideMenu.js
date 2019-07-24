import React from 'react';
import styled from 'styled-components';
import AsideTitle from './AsideTitle';
import AsideOption from './AsideOption';

const Brand = styled.div`
  margin-top: 2rem;
`;

class AsideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleOptions = () => {
    this.setState(preState => ({
      isActive: !preState.isActive,
    }));
  };

  render() {
    const { isActive } = this.state;
    const {
      brands,
      categories,
      brand,
      category,
      onBrandChange,
      onCategoryChange,
    } = this.props;

    return (
      <React.Fragment>
        <div className="is-hidden-mobile">
          <AsideTitle title="Products Type" />
          <AsideOption
            name="All"
            slug="all"
            isActive={category === 'all'}
            onChange={onCategoryChange}
          />
          {categories.map(item => (
            <AsideOption
              key={item.node.id}
              name={item.node.title}
              slug={item.node.slug}
              isActive={category === item.node.slug}
              onChange={onCategoryChange}
            />
          ))}
        </div>
        <Brand className="is-hidden-mobile">
          <AsideTitle title="Brand" />
          <AsideOption
            name="All"
            slug="all"
            isActive={brand === 'all'}
            onChange={onBrandChange}
          />
          {brands.map(item => (
            <AsideOption
              key={item.node.id}
              name={item.node.name}
              slug={item.node.slug}
              isActive={brand === item.node.slug}
              onChange={onBrandChange}
            />
          ))}
        </Brand>

        <div className="is-hidden-tablet" onClick={this.toggleOptions}>
          <AsideTitle title="Products Type" />
          {isActive ? (
            <React.Fragment>
              <AsideOption
                name="All"
                slug="all"
                isActive={category === 'all'}
                onChange={onCategoryChange}
              />
              {categories.map(item => (
                <AsideOption
                  key={item.node.id}
                  name={item.node.title}
                  slug={item.node.slug}
                  isActive={category === item.node.slug}
                  onChange={onCategoryChange}
                />
              ))}
            </React.Fragment>
          ) : null}
        </div>
        <Brand className="is-hidden-tablet" onClick={this.toggleOptions}>
          <AsideTitle title="Brand" />
          {isActive ? (
            <React.Fragment>
              <AsideOption
                name="All"
                slug="all"
                isActive={brand === 'all'}
                onChange={onBrandChange}
              />
              {brands.map(item => (
                <AsideOption
                  key={item.node.id}
                  name={item.node.name}
                  slug={item.node.slug}
                  isActive={brand === item.node.slug}
                  onChange={onBrandChange}
                />
              ))}
            </React.Fragment>
          ) : null}
        </Brand>
      </React.Fragment>
    );
  }
}

export default AsideMenu;
