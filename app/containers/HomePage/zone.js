import React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';

export default class Zone extends React.Component {

  onCloseThresholdChanged(value) {
    this.state.set('')
  }

  render() {
    const zone = this.props.zone;

    let form = '';
    let enabled = (zone.fields.close_threshold && zone.fields.open_threshold && zone.fields.event_id).bool();
    const closeThreshold =
    if (zone.fields.close_threshold && zone.fields.open_threshold && zone.fields.event_id) {
      form = (
        <div>
          <table>
            <tr>
              <td>
                <label htmlFor="close_threshold">Close threshold:</label>
              </td>
              <td>
                <input name="close_threshold" value={zone.fields.close_threshold} type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="open_threshold">Open threshold:</label>
              </td>
              <td>
                <input name="open_threshold" value={zone.fields.open_threshold} type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="event_id">Event ID:</label>
              </td>
              <td>
                <input name="event_id" value={zone.fields.event_id} type="text" />
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <button className="save-button">Save</button>
              </td>
            </tr>
          </table>
        </div>
      );
    }

    return form;
  }
}
Zone.propTypes = {
  zone: PropTypes.object.isRequired,
};
