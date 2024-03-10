import React from 'react';
import { Task } from '../types';

interface TaskPopupProps {
  task: Task;
  onClose: () => void;
}

function TaskPopup({ task, onClose }: TaskPopupProps) {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
        style={{ width: '70vw', height: '35vh', maxWidth: '600px', maxHeight: '600px' }}
      >
        <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-title">
                {task.content}
              </h2>
              <div className="mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {task.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Status: {task.columnId}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={handleClose} // Call the handleClose function on button click
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskPopup;
