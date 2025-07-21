// @/styles/index.ts
import { StyleSheet } from 'react-native';
import { styles as mainStyles } from '@/styles/_mainstyle'; // Assuming these are defined in _mainstyle.ts
import { spacing, colors, typography } from '@/styles/_mainstyle'; // Adjust the path if needed

export const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: spacing.large,
  },
  logoContainer: {
    marginTop: spacing.xxlarge,
    alignItems: 'center',
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: spacing.xxlarge,
    paddingHorizontal: spacing.medium,
  },
  headingText: {
    ...typography.heading1,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.small,
  },
  subheadingText: {
    ...typography.heading3,
    color: colors.white,
    textAlign: 'center',
    lineHeight: spacing.large,
  },
  buttonGroupContainer: {
    marginBottom: spacing.xxlarge,
  },
  buttonGroup: {
    gap: spacing.medium,
    marginBottom: spacing.large,
  },
  primaryButton: {
    backgroundColor: colors.white,
    paddingVertical: spacing.medium,
    borderRadius: spacing.small,
    alignItems: 'center',
  },
  primaryButtonText: {
    ...typography.button,
    color: colors.black,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.white,
    paddingVertical: spacing.medium,
    borderRadius: spacing.small,
    alignItems: 'center',
  },
  secondaryButtonText: {
    ...typography.button,
    color: colors.white,
  },
  skipLink: {
    alignItems: 'center',
  },
  skipLinkText: {
    ...typography.body,
    color: colors.white,
    textDecorationLine: 'underline',
  },
});

export { spacing };

export { appStyles as styles };
