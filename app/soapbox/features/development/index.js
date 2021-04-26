import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import ImmutablePureComponent from 'react-immutable-pure-component';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Column from '../ui/components/column';
import ScrollableList from '../../components/scrollable_list';
import { List as ImmutableList } from 'immutable';

const messages = defineMessages({
  heading: { id: 'column.development', defaultMessage: 'Development' },
});

const mapStateToProps = state => {
  return {
    // apps: ImmutableList([state.getIn(['auth', 'app'])]),
    apps: ImmutableList(/* TODO */),
  };
};

export default @connect(mapStateToProps)
@injectIntl
class Development extends ImmutablePureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    apps: ImmutablePropTypes.list,
  };

  renderApp = app => {
    return (
      <div className='app' key={app.get('id')}>
        {app.get('name')}
      </div>
    );
  }

  render() {
    const { intl, apps } = this.props;

    const emptyMessage = <FormattedMessage id='empty_column.apps' defaultMessage="You haven't created any apps yet. {create}" values={{ create: <Link to='/apps/create'><FormattedMessage id='empty_column.apps.create' defaultMessage='Create one now.' /></Link> }} />;

    return (
      <Column icon='code' heading={intl.formatMessage(messages.heading)} backBtnSlim>
        <ScrollableList
          scrollKey='apps'
          hasMore={false}
          emptyMessage={emptyMessage}
        >
          {apps.map(app => this.renderApp(app))}
        </ScrollableList>
      </Column>
    );
  }

}
