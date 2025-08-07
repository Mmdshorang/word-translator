import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { KeywordItem } from '../KeywordItem/KeywordItem';
import { useTranslations } from '../../../contexts/translation/useTranslations';
import type { KeywordListProps } from '../../../types';


export const KeywordList = ({ currentLang,  filter}: KeywordListProps) => {
  const { state, reorderKeywords } = useTranslations();
  const { keywords } = state;
  const filteredKeywords = keywords.filter(k =>
    k.key.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = keywords.findIndex((k) => k.id === active.id);
      const newIndex = keywords.findIndex((k) => k.id === over.id);

      // Create a new ordered array of IDs
      const newOrder = Array.from(keywords);
      const [movedItem] = newOrder.splice(oldIndex, 1);
      newOrder.splice(newIndex, 0, movedItem);

      reorderKeywords(newOrder.map(k => k.id));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={keywords.map(k => k.id)} strategy={verticalListSortingStrategy}>
        <div>
         {filteredKeywords.map((keyword) => (
            <KeywordItem key={keyword.id} keyword={keyword} currentLang={currentLang} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};