import { useContext, useLayoutEffect } from 'react';
import { MainContext } from '@ezbobdev/ui-framework';
import { stepName } from './constants';

export const useBodyClassNameInjection = (className, unsubscribe = false) => {
  useLayoutEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    if (body) {
      body.style.overflow = 'auto';
      body.classList.add(className);

      if (unsubscribe) {
        return () => {
          body.classList.remove(className);
        };
      }
    }
  });
};

export const useWrongDetails = () => {
  const { actions, sdkActions } = useContext(MainContext);
  return {
    rejectCustomerDueToWrongDetails: async () => {
      await sdkActions.case.updateCaseStep(stepName.rejectedWrongDetails);
      actions.userState.setCurrentStepByName(stepName.rejectedWrongDetails);
    },
  };
};

export const useIsSso = () => {
  const { actions } = useContext(MainContext);
  return Boolean(actions.case.getCaseValue('custom.externalId'));
};
