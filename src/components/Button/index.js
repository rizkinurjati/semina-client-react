import React from 'react';
import { Button } from 'react-bootstrap';

function SButton({
    children,
    action,
    variant,
    size,
    loading, //loading agar request tidak berulang saat spam klik
    disabled,
    className,
}){
    return (
        <Button
            className={className}
            onClick={action}
            variant={variant}
            disabled={disabled}
            size={size}
        >
            {loading ? 'loading...' : children}
        </Button>
    );
}
export default SButton;