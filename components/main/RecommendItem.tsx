import { styled } from "styled-components";

import Button from "../common/Button";
import StarIcon from "../icon/StarIcon";

import useToast from "@/hooks/useToast";
import { Recommend } from "@/queries/useRecommendMutation";
import trackingService from "@/services/trackingService";
import { typo_32_bold } from "@/styles/typo";

interface Props {
  recommend: Recommend;
  index: number;
}
const RecommendItem = ({ recommend, index }: Props) => {
  const { show } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      trackingService.event("recommend_copy", { index });
      show({ message: "복사되었습니다." });
    });
  };

  return (
    <RecommendWrapper key={recommend.name}>
      <LeftWrapper>
        <RecommendName>{recommend.name}</RecommendName>
        <ScoreWrapper>
          {new Array(MAX_SCORE).fill(0).map((_, index) => (
            <StarIcon key={index} width={16} height={16} fill={index >= recommend.score ? "transparent" : "#10A37F"} />
          ))}
        </ScoreWrapper>
      </LeftWrapper>
      <Button type="primary" size="small" label="Copy" onClick={() => handleCopy(recommend.name)} />
    </RecommendWrapper>
  );
};

export default RecommendItem;

const MAX_SCORE = 5;
const RecommendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const LeftWrapper = styled.div``;
const RecommendName = styled.p`
  ${typo_32_bold};
  color: #fff;
`;
const ScoreWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`;
