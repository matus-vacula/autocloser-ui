import React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';
import { connect } from 'react-redux';
import { Accordion, AccordionItem, AccordionItemBody, AccordionItemTitle } from 'react-accessible-accordion';
import styled from 'styled-components';
import '../../../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';
import Zone from './zone';

const MyAccordion = styled.div`
/**
* ----------------------------------------------
* Demo styles
* ----------------------------------------------
**/
.u-margin-top {
  margin-top: 1.875rem;
}

.block {
  padding: 1.25rem;
}

.u-margin-bottom-s {
  margin-bottom: .5rem;
}


.u-position-absolute {
  position: absolute;
}

.u-position-relative {
  position: relative;
}

.accordion {
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 2px;
}

.accordion__item + .accordion__item {
  border-top: 1px solid rgba(0, 0, 0, .1);
}

.accordion__item--has-icon {
  position: relative;
}

.accordion__title {
  background-color: #f4f4f4;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
}

.accordion__title:hover {
  background-color: #ddd;
}

.accordion__body {
  padding: 20px;
}

.accordion__title > *:last-child,
.accordion__body > *:last-child {
  margin-bottom: 0;
}

.accordion__arrow {
  display: inline-block;
  position: relative;
  width: 24px;
  height: 12px;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -6px;
}


.accordion__arrow::after,
.accordion__arrow::before {
  display: block;
  position: absolute;
  top: 50%;
  width: 10px;
  height: 2px;
  background-color: currentColor;
  content: '';
}

.accordion__arrow::before {
  left: 4px;
  transform: rotate(45deg);
}

[aria-expanded="true"] .accordion__arrow::before {
  transform: rotate(-45deg);
}

.accordion__arrow::after {
  right: 4px;
  transform: rotate(-45deg);
}

[aria-expanded="true"] .accordion__arrow::after {
  transform: rotate(45deg);
}

.accordion__arrow::before, .accordion__arrow::after {
  transition: transform .25s ease, -webkit-transform .25s ease;
}

/* -------------------------------------------------- */
/* ---------------- Animation part ------------------ */
/* -------------------------------------------------- */

@keyframes move-down {
  0% { transform: translateY(0); }
  10% { transform: translateY(0); }
  20% { transform: translateY(5px); }
  30% { transform: translateY(0); }
  100% { transform: translateY(0); }
}

@keyframes move-up {
  0% { transform: translateY(0); }
  10% { transform: translateY(0); }
  20% { transform: translateY(-5px); }
  30% { transform: translateY(0); }
  100% { transform: translateY(0); }
}

.accordion__title--animated:hover .accordion__arrow {
  animation-name: move-down;
  animation-duration: 1.5s;
}

.accordion__title--animated[aria-expanded="true"]:hover .accordion__arrow {
  animation-name: move-up;
  animation-duration: 1.5s;
}
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.homePage.get('zones').toJS());
    const zones = this.props.homePage.get('zones').toJS();

    const accordionItems = zones.map((zone) => (
      <AccordionItem key={zone.id}>
        <AccordionItemTitle>
          <b>Zone ID:</b> {zone.id}
        </AccordionItemTitle>
        <AccordionItemBody>
          <Zone zone={zone} />
        </AccordionItemBody>
      </AccordionItem>
      ));

    return (
      <div>
        <h1>Logistics Zone Autocloser</h1>
        <MyAccordion>
          <Accordion>
            {accordionItems}
          </Accordion>
        </MyAccordion>
      </div>
    );
  }
}

HomePage.propTypes = {
  homePage: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  homePage: state.get('homePage'),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, {})(HomePage);
