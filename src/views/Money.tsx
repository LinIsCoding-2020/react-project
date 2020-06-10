import Layout from "../components/Layout";
import React, {useState} from "react";
import {TagsSection} from "./Money/TagsSection";
import {RemarkSection} from "./Money/RemarkSection";
import styled from "styled-components";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        remark: '',
        category: '-' as Category,
        amount: '0'
    });
    const onChange = (obj: Partial<typeof selected>) => {
      setSelected({...selected, ...obj});
    };

    return (
        <MyLayout>
            <TagsSection
                value={selected.tags}
                onChange={tags => onChange({tags})}
            />
            <RemarkSection
                value={selected.remark}
                onChange={remark => onChange({remark})}
            />
            <CategorySection
                value={selected.category}
                onChange={category => onChange({category})}
            />
            <NumberPadSection
                value={selected.amount}
                onChange={amount => onChange({amount})}
                onOk={() => {}}
            />
        </MyLayout>
    );
}

export default Money;