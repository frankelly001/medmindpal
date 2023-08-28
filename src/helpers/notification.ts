import notifee, {
  TimestampTrigger,
  TriggerType,
  AndroidImportance,
  RepeatFrequency,
} from '@notifee/react-native';
import {showToast} from '../components/app-toast';

// cancelAllNotifications(notificationIds?: string[]): Promise<void>;
// cancelTriggerNotifications(notificationIds?: string[]): Promise<void>;

// notifee.cancelTriggerNotification(notificationId: string): Promise<void>;

export const createTriggerNotification = async ({
  message,
  time,
  title,
  subtitle,
  id,
  repeatFrequency,
}: {
  time: number;
  title: string;
  message: string;
  subtitle: string;
  repeatFrequency?: RepeatFrequency;
  id: string;
}) => {
  try {
    const channelID: string = 'medmindpal';
    //schedule a reminder
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: time,
      alarmManager: true,
      repeatFrequency,
    };

    //create a notification channel
    await notifee.createChannel({
      id: channelID,
      name: `Medmindpal Medication Reminder`,
      lights: false,
      vibration: true,
      importance: AndroidImportance.HIGH,
    });

    await notifee.requestPermission();

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        id,
        title,
        body: message,
        subtitle: subtitle,
        android: {
          channelId: channelID,
          pressAction: {
            id: 'default',
            launchActivity: 'com.medmindpal',
          },
        },
      },
      trigger,
    );
  } catch (error: any) {
    showToast('error', error?.message ?? error);
  }
};

export const cancelTriggeredNotification = async (id: string) => {
  await notifee.cancelTriggerNotification(id);
};

export const cancelAllTriggeredNotification = async (ids: string[]) => {
  await notifee.cancelTriggerNotifications(ids);
};

type RepeatFrequencyType = 'NONE' | 'HOURLY' | 'DAILY' | 'WEEKLY';

export const repeatFrequency: {
  [key in RepeatFrequencyType]: number;
} = {
  NONE: -1,
  HOURLY: 0,
  DAILY: 1,
  WEEKLY: 2,
};

export const repeatFrequencyData: {[key in 'label' | 'value']: string}[] =
  Object.keys(repeatFrequency).map(key => {
    return {
      label: key as RepeatFrequencyType,
      value: repeatFrequency[key as RepeatFrequencyType].toString(),
    };
  });
