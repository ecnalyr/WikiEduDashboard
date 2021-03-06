import 'testHelper';
import React from 'react';
import { render } from 'enzyme';
import CourseNavbar from 'components/common/course_navbar';

describe('Timeline link', () => {
  it('renders for a ClassroomProgramCourse', () => {
    const course = {
      type: 'ClassroomProgramCourse'
    };
    const component = (
      <CourseNavbar
        course={course}
        location={{ pathname: 'foo/bar_(baz)' }}
      />
    );
    expect(render(component).find('#timeline-link').length).to.eq(1);
  });

  it('does not render for a BasicCourse', () => {
    const course = {
      type: 'BasicCourse'
    };
    const component = (
      <CourseNavbar
        course={course}
        location={{ pathname: 'foo/bar_(baz)' }}
      />
    );
    expect(render(component).find('#timeline-link').length).to.eq(0);
  });
});
