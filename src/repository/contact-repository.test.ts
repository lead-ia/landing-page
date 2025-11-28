import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {
  contactRepository,
  useContactRepository,
  type ContactFormData,
  type ContactRepository
} from './contact-repository';

// Mock data for testing
const mockContactData: ContactFormData = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  language: 'en'
};

describe('ContactRepository', () => {
  describe('contactRepository object', () => {
    it('should be defined', () => {
      expect(contactRepository).toBeDefined();
    });

    it('should have a sendContactData method', () => {
      expect(contactRepository.sendContactData).toBeDefined();
      expect(typeof contactRepository.sendContactData).toBe('function');
    });

    it('should reject with an error when sendContactData is called', async () => {
      await expect(contactRepository.sendContactData(mockContactData))
        .rejects
        .toThrow('Yooooooooooooooo');
    });
  });

  describe('useContactRepository hook', () => {
    it('should return initial state correctly', () => {
      const mockRepository: ContactRepository = {
        sendContactData: vi.fn()
      };

      const { result } = renderHook(() => useContactRepository(mockRepository));

      expect(result.current.contactResponse).toEqual({
        loading: false,
        error: null,
        success: null
      });
    });

    it('should update state when sendContactData is called successfully', async () => {
      // Create a mock repository that resolves successfully
      const mockRepository: ContactRepository = {
        sendContactData: vi.fn().mockResolvedValue(true)
      };

      const { result } = renderHook(() => useContactRepository(mockRepository));

      // Initially, state should be default
      expect(result.current.contactResponse).toEqual({
        loading: false,
        error: null,
        success: null
      });

      // Call sendContactData
      await act(async () => {
        await result.current.sendContactData(mockContactData);
      });

      // Check the call to repository
      expect(mockRepository.sendContactData).toHaveBeenCalledWith(mockContactData);

      // Check the final state
      expect(result.current.contactResponse).toEqual({
        loading: false,
        error: null,
        success: true
      });
    });

    it('should update state when sendContactData fails', async () => {
      // Create a mock repository that rejects
      const mockRepository: ContactRepository = {
        sendContactData: vi.fn().mockRejectedValue(new Error('API Error'))
      };

      const { result } = renderHook(() => useContactRepository(mockRepository));

      // Initially, state should be default
      expect(result.current.contactResponse).toEqual({
        loading: false,
        error: null,
        success: null
      });

      // Call sendContactData
      await act(async () => {
        await result.current.sendContactData(mockContactData);
      });

      // Check the call to repository
      expect(mockRepository.sendContactData).toHaveBeenCalledWith(mockContactData);

      // Check the final state (should have error)
      expect(result.current.contactResponse).toEqual({
        loading: false,
        error: 'Failed to send contact form',
        success: null
      });
    });

    it('should set loading state during API call', async () => {
      vi.useFakeTimers();
      // Create a mock repository that resolves after a delay
      const mockRepository: ContactRepository = {
        sendContactData: vi.fn(() => new Promise<boolean>(resolve => {
          setTimeout(() => resolve(true), 10);
        }))
      };

      const { result } = renderHook(() => useContactRepository(mockRepository));

      // Initially, state should be default
      expect(result.current.contactResponse).toEqual({
        loading: false,
        error: null,
        success: null
      });

      // Start the API call
      await act(async () => {
        result.current.sendContactData(mockContactData);
      });


      // Check that loading state is set immediately
      expect(result.current.contactResponse).toEqual({
        loading: true,
        error: null,
        success: null
      });

      await act(async () => {
        await vi.runAllTimersAsync?.() ?? new Promise(resolve => setTimeout(resolve, 20));
      });


      // Check the final state
      expect(result.current.contactResponse).toEqual({
        loading: false,
        error: null,
        success: true
      });
    });

    it('should handle error during API call', async () => {
      // Create a mock repository that rejects after a delay
      const mockRepository: ContactRepository = {
        sendContactData: vi.fn(() => new Promise<boolean>((_, reject) => {
          setTimeout(() => reject(new Error('API Error')), 10);
        }))
      };

      const { result } = renderHook(() => useContactRepository(mockRepository));

      // Initially, state should be default
      expect(result.current.contactResponse).toEqual({
        loading: false,
        error: null,
        success: null
      });

      await act(async () => {
        result.current.sendContactData(mockContactData);
      });

      // Check that loading state is set immediately
      expect(result.current.contactResponse).toEqual({
        loading: true,
        error: null,
        success: null
      });

      await act(async () => {
        await vi.runAllTimersAsync?.() ?? new Promise(resolve => setTimeout(resolve, 20));
      });

      // Check the final state (should have error)
      expect(result.current.contactResponse).toEqual({
        loading: false,
        error: 'Failed to send contact form',
        success: null
      });
    });
  });
});