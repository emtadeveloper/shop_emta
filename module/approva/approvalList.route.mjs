import express from 'express';
import approvalListController from './approvalList.controller.mjs';

const router = express.Router();

router.post('/', approvalListController.createApprovalListController);
router.get('/', approvalListController.getAllApprovalListController);
router.get('/:id', approvalListController.getApprovalListByIdController);
router.put('/:id', approvalListController.updateApprovalListByIdController);
router.delete('/:id', approvalListController.deleteApprovalListByIdController);

export default router;
