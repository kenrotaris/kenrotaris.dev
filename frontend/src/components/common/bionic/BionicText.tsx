import React from 'react';
import './BionicText.scss';

interface BionicTextProps {
    text: string;
}

const BoldFastText: React.FC<BionicTextProps> = ({ text }) => {
    const bionicWords = text.split(' ').map((word, index) => {
        const splitIndex = Math.ceil(word.length / 3);
        const firstPart = word.substring(0, splitIndex);
        const restPart = word.substring(splitIndex);
        return (
            <React.Fragment key={index}>
                <a className="bionic">{firstPart}</a>{restPart}{' '}
            </React.Fragment>
        );
    });

    return <p>{bionicWords}</p>;
};

export default BoldFastText;
