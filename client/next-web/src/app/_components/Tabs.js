'use client';
import ExploreTab from './ExploreTab';
import MyTab from './MyTab';
import TabButton from '@/components/TabButton';

import { useAuthContext } from '@/context/AuthContext';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppStore } from '@/zustand/store';

export default function Tabs({ characters }) {
  const { user } = useAuthContext();
  const { tabNow, setTabNow } = useAppStore();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setTabNow(tab);
    }
  }, []);

  function charactersShown(tab) {
    if (tab === 'explore') {
      return characters.filter((character) => character.source === 'default');
    } else if (tab === 'community') {
      return characters.filter((character) => character.source === 'community');
    }
  }

  return (
    <>
      <div className='flex flex-row justify-center mt-10'>
  <div className='w-[630px] tab-container border-2 rounded-full p-1 border-tab'>
    <div></div> {/* 空div占位 */}
    <TabButton
      isSelected={user && tabNow === 'myCharacters'}
      isDisabled={user == null}
      handlePress={() => setTabNow('myCharacters')}
    >
      My Characters
    </TabButton>
    <div></div> {/* 空div占位 */}
  </div>
</div>

      <ExploreTab
        characters={charactersShown(tabNow)}
        isDisplay={tabNow === 'myCharacters'}
      />
      {user && <MyTab isDisplay={tabNow === 'explore'} />}
    </>
  );
}
