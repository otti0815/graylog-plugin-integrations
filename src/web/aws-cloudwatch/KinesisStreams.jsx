import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import { FormDataContext } from './context/FormData';
import { ApiContext } from './context/Api';
import FormAdvancedOptions from './FormAdvancedOptions';

import FormWrap from '../common/FormWrap';
import ValidatedInput from '../common/ValidatedInput';
import Routes from '../common/Routes';
import { renderOptions } from '../common/Options';

const KinesisStreams = ({ onChange, onSubmit }) => {
  const { formData } = useContext(FormDataContext);
  const { availableStreams } = useContext(ApiContext);

  const handleSubmit = (event) => {
    if (!event.error) {
      onSubmit(event);
    }
  };

  return (
    <Row>
      <Col md={8}>
        <FormWrap onSubmit={handleSubmit} buttonContent="Verify Stream &amp; Format">
          <h2>Choose Kinesis Stream</h2>
          <p>Below is a list of all Kinesis Streams found within the specified AWS account. Please choose the Stream you would like us to read messages from, or follow the directions to begin <a href={Routes.INTEGRATIONS.AWS.CLOUDWATCH.step('kinesis-setup')}>setting up your CloudWatch Log Group</a> to feed messages into a new Kinesis Stream.</p>

          <ValidatedInput id="awsCloudWatchKinesisStream"
                          type="select"
                          fieldData={formData.awsCloudWatchKinesisStream}
                          onChange={onChange}
                          label="Choose Stream"
                          required>
            {renderOptions(availableStreams, 'Choose Kinesis Stream')}
          </ValidatedInput>

          <FormAdvancedOptions onChange={onChange} />
        </FormWrap>
      </Col>
    </Row>
  );
};

KinesisStreams.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default KinesisStreams;
