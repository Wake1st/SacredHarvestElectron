import AndAgainTheProphetChastisedThem from '@/assets/audio/wav/chants/And Again The Prophet Chastised Them.wav';
import AndSoTheProphetCastOutTheLazy from '@/assets/audio/wav/chants/And So The Prophet Cast Out The Lazy.wav';
import AndSoTheProphetChidedTheMen from '@/assets/audio/wav/chants/And So The Prophet Chided The Men.wav';
import AndSoTheProphetDividedThem from '@/assets/audio/wav/chants/And So The Prophet Divided Them.wav';
import AndSoTheySailed from '@/assets/audio/wav/chants/And So They Sailed.wav';
import AndTheProphetCommandedThem from '@/assets/audio/wav/chants/And The Prophet Commanded Them.wav';
import AndTheProphetCorrectedThem from '@/assets/audio/wav/chants/And The Prophet Corrected Them.wav';
import AndTheProphetSpokeThus from '@/assets/audio/wav/chants/And The Prophet Spoke Thus.wav';
import AndTheProphetSteppedInToInstructThem from '@/assets/audio/wav/chants/And The Prophet Stepped In To Instruct Them.wav';
import AndTheirNeedsWereMet from '@/assets/audio/wav/chants/And Their Needs Were Met.wav';
import ButThePeopleBeganToArgue from '@/assets/audio/wav/chants/But The People Began To Argue.wav';
import ButTheProphetChidedThem from '@/assets/audio/wav/chants/But The Prophet Chided Them.wav';
import ButTheProphetCorrectedThem from '@/assets/audio/wav/chants/But The Prophet Corrected Them.wav';
import ButTheProphetScoldedThem from '@/assets/audio/wav/chants/But The Prophet Scolded Them.wav';
import ButTheProphetWentBeforeThem from '@/assets/audio/wav/chants/But The Prophet Went Before Them.wav';
import HaveYouBecomeSoSelfRighteous from '@/assets/audio/wav/chants/Have You Become So Self-Righteous.wav';
import NowAsTheyBeganWorking from '@/assets/audio/wav/chants/Now As They Began Working.wav';
import NowTheDaysWereGrowingShort from '@/assets/audio/wav/chants/Now The Days Were Growing Short.wav';
import NowThereWereThoseInTheMultitude from '@/assets/audio/wav/chants/Now There Were Those In The Multitude.wav';
import NowThereWereThoseWhoRefusedToWork from '@/assets/audio/wav/chants/Now There Were Those Who Refused To Work.wav';
import NowThereWereThoseWhoSought from '@/assets/audio/wav/chants/Now There Were Those Who Sought.wav';
import SoTheProphetCommandedThemToBeBound from '@/assets/audio/wav/chants/So The Prophet Commanded Them To Be Bound.wav';
import SoTheProphetInstructedThem from '@/assets/audio/wav/chants/So The Prophet Instructed Them.wav';
import TheProphetWarnedThem from '@/assets/audio/wav/chants/The Prophet Warned Them.wav';
import ThereCameMerchants from '@/assets/audio/wav/chants/There Came Merchants.wav';
import TheyMarchedUponHills from '@/assets/audio/wav/chants/They Marched Upon Hills.wav';
import TheyTraveledUntilTheyReachedAForest from '@/assets/audio/wav/chants/They Traveled Until They Reached A Forest.wav';
import UponFindingShore from '@/assets/audio/wav/chants/Upon Finding Shore.wav';
import UponHearingThis from '@/assets/audio/wav/chants/Upon Hearing This.wav';
import WhenTheMenHadFoundManyGreatTreasures from '@/assets/audio/wav/chants/When The Men Had Found Many Great Treasures.wav';
import YetTheProphetForgaveThem from '@/assets/audio/wav/chants/Yet The Prophet Forgave Them.wav';
import YouWhoFollowMeDoSoOutOfFaith from '@/assets/audio/wav/chants/You Who Follow Me Do So Out Of Faith.wav';

import chants from '@/data/chants.json';
import type { IChants } from './types';

interface IChantData {
  [key: string]: any;
}

const chantData: IChantData = {
  'And Again The Prophet Chastised Them.wav': AndAgainTheProphetChastisedThem,
  'And So The Prophet Cast Out The Lazy.wav': AndSoTheProphetCastOutTheLazy,
  'And So The Prophet Chided The Men.wav': AndSoTheProphetChidedTheMen,
  'And So The Prophet Divided Them.wav': AndSoTheProphetDividedThem,
  'And So They Sailed.wav': AndSoTheySailed,
  'And The Prophet Commanded Them.wav': AndTheProphetCommandedThem,
  'And The Prophet Corrected Them.wav': AndTheProphetCorrectedThem,
  'And The Prophet Spoke Thus.wav': AndTheProphetSpokeThus,
  'And The Prophet Stepped In To Instruct Them.wav': AndTheProphetSteppedInToInstructThem,
  'And Their Needs Were Met.wav': AndTheirNeedsWereMet,
  'But The People Began To Argue.wav': ButThePeopleBeganToArgue,
  'But The Prophet Chided Them.wav': ButTheProphetChidedThem,
  'But The Prophet Corrected Them.wav': ButTheProphetCorrectedThem,
  'But The Prophet Scolded Them.wav': ButTheProphetScoldedThem,
  'But The Prophet Went Before Them.wav': ButTheProphetWentBeforeThem,
  'Have You Become So Self-Righteous.wav': HaveYouBecomeSoSelfRighteous,
  'Now As They Began Working.wav': NowAsTheyBeganWorking,
  'Now The Days Were Growing Short.wav': NowTheDaysWereGrowingShort,
  'Now There Were Those In The Multitude.wav': NowThereWereThoseInTheMultitude,
  'Now There Were Those Who Refused To Work.wav': NowThereWereThoseWhoRefusedToWork,
  'Now There Were Those Who Sought.wav': NowThereWereThoseWhoSought,
  'So The Prophet Commanded Them To Be Bound.wav': SoTheProphetCommandedThemToBeBound,
  'So The Prophet Instructed Them.wav': SoTheProphetInstructedThem,
  'The Prophet Warned Them.wav': TheProphetWarnedThem,
  'There Came Merchants.wav': ThereCameMerchants,
  'They Marched Upon Hills.wav': TheyMarchedUponHills,
  'They Traveled Until They Reached A Forest.wav': TheyTraveledUntilTheyReachedAForest,
  'Upon Finding Shore.wav': UponFindingShore,
  'Upon Hearing This.wav': UponHearingThis,
  'When The Men Had Found Many Great Treasures.wav': WhenTheMenHadFoundManyGreatTreasures,
  'Yet The Prophet Forgave Them.wav': YetTheProphetForgaveThem,
  'You Who Follow Me Do So Out Of Faith.wav': YouWhoFollowMeDoSoOutOfFaith,
};

export default (soundId: number) => {
  const chant = chants.find(({ id }: IChants) => id === soundId);
  return chantData[chant?.file as keyof IChantData];
};
