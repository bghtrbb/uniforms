import classnames  from 'classnames';
import {BaseForm}  from 'uniforms';
import {PropTypes} from 'react';

const Bootstrap3 = parent => class extends parent {
    static Bootstrap3 = Bootstrap3;

    static displayName = `Bootstrap3${parent.displayName}`;

    static propTypes = {
        ...parent.propTypes,

        grid: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    };

    getChildContextState () {
        return {
            ...super.getChildContextState(),
            grid: this.props.grid
        };
    }

    getNativeFormProps () {
        const error = this.getChildContextError();
        const {
            className,
            grid,

            ...props
        } = super.getNativeFormProps();

        return {
            ...props,
            className: classnames('form', {error, 'form-horizontal': grid}, className)
        };
    }
};

export default Bootstrap3(BaseForm);
