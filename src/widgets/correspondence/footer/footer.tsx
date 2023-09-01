import { Button, Input, InputStyleType } from "gram/shared";
import { ClipIcon, SendIcon } from "public/svgs";
import { type FC } from "react";

export const Footer: FC = () => (
  <footer className="flex h-fit w-full bg-black-400 pb-1 pr-2">
    <Button>
      <ClipIcon />
    </Button>
    <Input
      inputStyleType={InputStyleType.CORRESPONDENCE}
      placeholder="Write a message ..."
    />
    <Button>
      <SendIcon />
    </Button>
  </footer>
);
