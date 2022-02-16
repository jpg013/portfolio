import './BasicChip.css';

type ComponentProps = {
  text: string;
}

const basicChip = ({ text }: ComponentProps) => {
  return (
    <div className="chip">
      <span>{ text }</span>
    </div>
  );
};

export default basicChip;
