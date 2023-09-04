import './button.css';
import classNames from 'classnames';

var Button = function(props){

    const {type='primary', fillMode='filled', variant='optimus', ...extProps} = props;

    const classes = classNames("button",'button-type-'+type, 'button-fill-'+fillMode, 'button-variant-'+fillMode);

    return (<div class={classes} {...extProps}>{props.children}</div>)

}

export {Button}