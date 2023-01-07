import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12  bg-tertiary flex items-center'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })}
        
      </div>
    </section>
  );
};

export default Skills;
