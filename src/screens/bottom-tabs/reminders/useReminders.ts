import {useState} from 'react';
import {useSelector} from 'react-redux';
import {showToast} from '../../../components/app-toast';
import {cancelAllTriggeredNotification} from '../../../helpers/notification';
import {useAppDispatch} from '../../../redux/store';
import {storeState} from '../../../redux/storeSliceType';
import {deleteReminder} from '../../../redux/user/userSlice';
import {timeOfDay} from './types';

export const useReminders = () => {
  const [showDeleteNotice, setShowsDeleteNotice] = useState(false);
  const {reminders} = useSelector((state: storeState) => state.userReducer);
  const dispatch: any = useAppDispatch();
  const [deleteReminderDetails, setDeleteReminderDetails] = useState<{
    reminderId: string;
    pillName: string;
    timeOfDay: {id: string; name: timeOfDay; value: Date}[];
  } | null>(null);

  const _handleCancel = () => {
    setShowsDeleteNotice(false);
  };

  const _handleConfirmDelete = async () => {
    if (deleteReminderDetails?.timeOfDay) {
      try {
        setShowsDeleteNotice(false);
        dispatch(deleteReminder(deleteReminderDetails?.reminderId ?? ''));
        const notificationIds = deleteReminderDetails?.timeOfDay.map(
          el => el.id,
        );
        await cancelAllTriggeredNotification(notificationIds);
        showToast('success', 'Reminder deleted successfully');
      } catch (error) {
        showToast('success', 'Reminder failed to deleted');
      }
    }
  };

  const _handleShowDeleteModal = ({
    reminderId,
    pillName,
    timeOfDay,
  }: {
    reminderId: string;
    pillName: string;
    timeOfDay: {id: string; name: timeOfDay; value: Date}[];
  }) => {
    setDeleteReminderDetails({
      reminderId,
      pillName,
      timeOfDay,
    });
    setShowsDeleteNotice(true);
  };

  return {
    _handleCancel,
    _handleShowDeleteModal,
    _handleConfirmDelete,
    showDeleteNotice,
    reminders,
    deleteReminderDetails,
  };
};
