export interface Props {
  page_name: string
}

const About = (props: Props) => {
  return (
    <div>
      <h1>{props.page_name}</h1>
    </div>
  );
}

export default About;
