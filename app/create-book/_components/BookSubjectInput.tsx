
import React from 'react';

import { Textarea } from '@nextui-org/input';

const BookSubjectInput = ({ userSelection }: any) => {
  return (
    <div>
      <label className='font-bold text-4xl text-[#1A237E]'>
        1. Subject of the book
      </label>
      <Textarea
        placeholder='Write the subject of the book which you want to generate!'
        size='lg'
        classNames={{
          input: 'resize-y min-h-[230px] text-2xl p-5',
        }}
        className='mt-3 max-w-lg'
        onChange={(e) =>
          userSelection({
            fieldValue: e.target.value,
            fieldName: 'bookSubject',
          })
        }
      />
    </div>
  );
};

export default BookSubjectInput;
